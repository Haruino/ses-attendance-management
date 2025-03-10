import { CardTitle } from "@/app/components/atom/CardTitle";
import { Card } from "@/app/components/Molecules/Card";
import { LoginForm } from "@/app/components/Organism/LoginForm";
import { CenterdContainer } from "@/app/components/Templates/CenterdContainer";
import React from "react";

const page = () => {
  return (
    <CenterdContainer>
      <Card className="min-h-[540px]">
        <CardTitle title="ログイン" className="p-6" />
        <LoginForm />
      </Card>
    </CenterdContainer>
  );
};

export default page;
