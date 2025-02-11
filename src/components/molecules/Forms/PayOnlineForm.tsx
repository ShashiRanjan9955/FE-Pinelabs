import React from "react";
import FormGroup from "../../atoms/FormsRelated/FormGroup";
import SelectField from "../../atoms/FormsRelated/SelectField";
import TermsOfUse from "../../atoms/TermsOfUse";
import SubmitButton from "../../atoms/Buttons/SubmitButton";

const PayOnlineForm: React.FC = ({}) => {
  return (
    <div className="PayOnlineForm">
      <form>
        <h3 className="sub-heading pb-12">Invoice Payment</h3>

        <div className="grid grid-cols-2 gap-4">
          <FormGroup label="Merchant Name *" type="text" placeholder="Merchant Name" />
          <FormGroup label="Email ID *" type="email" placeholder="johndoe@gmail.com" />
          <FormGroup label="Mobile Number *" type="tel" placeholder="98765 43210" />

          <div className="form-group">
            <label htmlFor="amount">Amount (Rs.)*</label>
            <SelectField
              options={[
                { value: "10000", label: "Rs. 10,000" },
                { value: "50000", label: "Rs. 50,000" },
                { value: "100000", label: "Rs. 1,00,000" },
                { value: "500000", label: "Rs. 5,00,000" },
                { value: "1000000", label: "Rs. 10,00,000" },
              ]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Customer Identifier*</label>
            <SelectField
              options={[
                { value: "Select Customer Identifier*", label: "Select Customer Identifier*", disabled:true },
                { value: "Customer Identifier*", label: "Customer Identifier*" },
                { value: "Sales Query Code", label: "Sales Query Code" },

              ]}
            />
          </div>
          <FormGroup label="Alternate Phone Number" type="tel" placeholder="98765 43210" />
          
        </div>

        <div className="terms-of-use pt-6">
          <TermsOfUse />
          <SubmitButton text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default PayOnlineForm;
