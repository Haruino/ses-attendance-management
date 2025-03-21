import { CardTitle } from "@/components/Atom/CardTitle"
import { Card } from "@/components/Molecules/Card"
import { LoginForm } from "@/components/Organism/LoginForm"
import { CenterdContainer } from "@/components/Templates/CenterdContainer"
import React from "react"

const page = () => {
  return (
    <CenterdContainer>
      <Card className="min-h-[540px]">
        <CardTitle title="ログイン" className="p-6" />
        <LoginForm />
      </Card>
    </CenterdContainer>
  )
}

export default page
