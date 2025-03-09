import { CardTitle } from "@/app/components/atom/CardTitle";
import { Card } from "@/app/components/Molecules/Card";
import { CenterdContainer } from "@/app/components/Templates/CenterdContainer";
import React from "react";

const page = () => {
  return (
    <CenterdContainer>
      <Card>
        <CardTitle title="ログイン" />
        
      </Card>
    </CenterdContainer>
  );
};

export default page;
