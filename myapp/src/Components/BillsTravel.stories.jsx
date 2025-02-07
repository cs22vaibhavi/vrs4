import React from "react";
import BillsTravel from "./BillsTravel";

export default {
  title: "Components/BillsTravel",
  component: BillsTravel,
};

const Template = (args) => <BillsTravel {...args} />;

export const Default = Template.bind({});
Default.args = {};
