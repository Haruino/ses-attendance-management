import { CardTitle } from "@/components/Atom/CardTitle"
import { Card } from "@/components/Molecules/Card"
import { CenterdContainer } from "@/components/Templates/CenterdContainer"
import React from "react"

const page = () => {
  return (
    <CenterdContainer>
      <Card className="max-w-2xl">
        <CardTitle title="マイページ" />
        <div className="flex justify-between items-center p-8">
          <h1 className="border rounded-full border-gray-300 bg-gray-300 h-20">ユーザー画像</h1>
          <div>
            <label>ユーザー名</label>
            <h2>テスト太郎</h2>
            <label>ユーザーID</label>
            <h3>abcde12345</h3>
          </div>
        </div>
      </Card>
    </CenterdContainer>
  )
}

export default page
