"use client";

import {Sidebar} from "@/components/Sidebar";
import {Button} from "@/components/common/Button";
import {CalendarCard} from "@/components/common/CalendarCard";
import {InnerWrapper} from "@/components/common/InnerWrapper";
import {Wrapper} from "@/components/common/Wrapper";
import {useStore} from "@/store/useStore";

export default function Appointments() {
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  const bears = useStore((state: any) => state.bears);

  return (
    <Wrapper>
      <InnerWrapper>
        <Sidebar />

        <div>
          <CalendarCard
            type="consultation"
            title="Meeting"
            dateTime="8:00 AM - 9:30 AM"
            owners={[`Chrissie Lee`, `Kurt Browne`, `Anthony dela Cruz`]}
          />
          <br />
          <CalendarCard
            type="vaccination"
            title="Brownie’s Vaccination"
            dateTime="10:30 AM - 11:30 AM"
            owners={[`John Doe`]}
          />
          <br />

          <div className="bg-dark">
            <h1 className="text-white-100">{bears} around here...</h1>
          </div>
          <br />

          <Button variant="filled" onClick={increasePopulation}>
            New Appointment
          </Button>
          <br />
          <br />

          <Button variant="outlined" onClick={increasePopulation}>
            Cancel Appointment
          </Button>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
