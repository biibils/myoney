'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Transaction = {
  id: string
  title: string
  amount: number
  category: string
  date: string
}

export default function DashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .order('date', { ascending: false })

      if (error) {
        console.error(error)
      } else {
        setTransactions(data)
      }
    }

    fetchTransactions()
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">💸 Transaksi Keuangan</h1>
      <ul className="space-y-2">
        {transactions.map((tx) => (
          <li
            key={tx.id}
            className="border rounded p-4 shadow-sm bg-white flex justify-between"
          >
            <div>
              <div className="font-semibold">{tx.title}</div>
              <div className="text-sm text-gray-500">{tx.category}</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-green-600">
                Rp {tx.amount.toLocaleString('id-ID')}
              </div>
              <div className="text-xs text-gray-400">{tx.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
