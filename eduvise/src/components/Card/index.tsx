import Image from "next/image";
import styles from "./style.module.css";
import { useInstitutionState } from "@/providers/InstitutionProvider";
import { Card } from "antd";
import { useContext, useEffect } from "react";
import { InstitutionActionsContext } from "@/providers/InstitutionProvider/context";

export default function InfoCard(): React.ReactNode {
  const { institutions } = useInstitutionState();

  return (
    <div style={{ background: '', padding: '30px'}}>
      {institutions?.map((institution, index) => (
        <Card title={institution.name} bordered={false} style={{ width: 600, margin: '15px' }} key={index}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <p>{institution.description}</p>
              <p>Opening Date: <b>{institution.openingDate}</b></p>
              <p>Closing Date: <b>{institution.closingDate}</b></p>
            </div>
            <div style={{ width: 150, height: 150, background: 'lightgray', marginLeft: '20px' }}></div> {/* Placeholder square div */}
          </div>
        </Card>
      ))}
    </div>
  );
}
