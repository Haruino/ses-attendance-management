import { CardTitle } from "@/components/Atom/CardTitle"
import { Card } from "@/components/Molecules/Card"
import { RegisterForm } from "@/components/Organism/RegisterForm"
import { CenterdContainer } from "@/components/Templates/CenterdContainer"
import React from "react"

const page = () => {
  return (
    <CenterdContainer>
      <Card className="min-h-[540px]">
        <CardTitle title="新規登録" className="p-6" />
        <RegisterForm />
      </Card>
    </CenterdContainer>
  )
}

export default page
