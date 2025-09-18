// File ini untuk fetch data wilayah Indonesia, error ga bisa di run scriptsnya, jadi perlu ubah pake fetch langsung di form Profil

import { createClient } from "@supabase/supabase-js";

type Province = {
  id: number;
  name: string;
};

type Regency = {
  id: number;
  province_id: number;
  name: string;
};

type District = {
  id: number;
  regency_id: number;
  name: string;
};

type Village = {
  id: number;
  district_id: number;
  name: string;
};


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // ⚠️ SERVICE ROLE KEY
);

async function syncProvinces(): Promise<Province[]> {
  const res = await fetch("https://wilayah.id/api/provinces.json");
  const provinces: Province[] = await res.json();

  const { error } = await supabase.from("provinces").upsert(provinces, { onConflict: "id" });
  if (error) throw error;
  console.log(`✅ Synced ${provinces.length} provinces`);
  return provinces;
}

async function syncRegencies(provinces: Province[]) {
  for (const prov of provinces) {
    const res = await fetch(`https://wilayah.id/api/regencies/${prov.id}.json`);
    const regencies: Omit<Regency, "province_id">[] = await res.json();

    const withProv: Regency[] = regencies.map((r) => ({ ...r, province_id: prov.id }));
    const { error } = await supabase.from("regencies").upsert(withProv, { onConflict: "id" });
    if (error) throw error;

    console.log(`✅ Synced ${withProv.length} regencies for province ${prov.name}`);
  }
}

async function syncDistricts() {
  const { data: regencies, error } = await supabase.from("regencies").select("id,name");
  if (error || !regencies) throw error;

  for (const reg of regencies as Regency[]) {
    const res = await fetch(`https://wilayah.id/api/districts/${reg.id}.json`);
    const districts: Omit<District, "regency_id">[] = await res.json();

    const withReg: District[] = districts.map((d) => ({ ...d, regency_id: reg.id }));
    const { error: err } = await supabase.from("districts").upsert(withReg, { onConflict: "id" });
    if (err) throw err;

    console.log(`✅ Synced ${withReg.length} districts for regency ${reg.name}`);
  }
}

async function syncVillages() {
  const { data: districts, error } = await supabase.from("districts").select("id,name");
  if (error || !districts) throw error;

  for (const dist of districts as District[]) {
    const res = await fetch(`https://wilayah.id/api/villages/${dist.id}.json`);
    const villages: Omit<Village, "district_id">[] = await res.json();

    const withDist: Village[] = villages.map((v) => ({ ...v, district_id: dist.id }));
    const { error: err } = await supabase.from("villages").upsert(withDist, { onConflict: "id" });
    if (err) throw err;

    console.log(`✅ Synced ${withDist.length} villages for district ${dist.name}`);
  }
}


async function main() {
  try {
    const provinces = await syncProvinces();
    await syncRegencies(provinces);
    await syncDistricts();
    await syncVillages();
    console.log("🎉 All data synced successfully!");
  } catch (e) {
    console.error("❌ Sync failed:", e);
  }
}

main();
