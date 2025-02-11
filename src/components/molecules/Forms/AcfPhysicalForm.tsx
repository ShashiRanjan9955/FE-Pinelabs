import React from "react";
import Link from "next/link";
import FormGroup from "../../atoms/FormsRelated/FormGroup";
import SelectField from "../../atoms/FormsRelated/SelectField";
import RadioButton from "../../atoms/FormsRelated/RadioButton";
const AcfPhysicalForm: React.FC = () => {
  return (
    <div className="PayOnlineForm">
      <form action="">
        <h3 className="sub-heading pb-12">Invoice Payment</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="amount">Amount (Rs.) *</label>
            <SelectField
              id="amount"
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
            <label htmlFor="amountType">Amount Type *</label>
            <SelectField
              id="amountType"
              options={[
                { value: "maximum", label: "Maximum" },
                { value: "fixed", label: "Fixed" },
              ]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="frequency">Frequency *</label>
            <SelectField
              id="frequency"
              options={[
                { value: "As and When Presented", label: "As and When Presented" },
                { value: "Half Yearly", label: "Half Yearly" },
                { value: "monthly", label: "Monthly" },
                { value: "Quaterly", label: "Quaterly" },
                { value: "Yearly", label: "Yearly" },
              ]}
            />
          </div>

          <FormGroup label="Start Date *" type="date" placeholder="" />

          <div className="form-group radio-button">
            <label>End Date *</label>
            <div className="flex items-center justify-between">
              <RadioButton
                name="endDate"
                value="untilCancelled"
                label="Until Cancelled"
              />
              <RadioButton
                name="endDate"
                value="specificDate"
                label="A Specific Date"
              />
            </div>
          </div>

          <FormGroup
            label="Bank Account IFSC*"
            type="number"
            placeholder="Bank Account IFSC"
          />
          <div className="form-group">
            <label htmlFor="amountType">Amount Type *</label>
            <SelectField
              id="amountType"
              options={[
                { value: "maximum", label: "Saving" },
                { value: "fixed", label: "Fixed" },
              ]}
            />
          </div>
          <FormGroup label="Mobile Number *" type="tel" placeholder="Mobile Number" />
          <FormGroup label="Email ID *" type="email" placeholder="johndoe@gmail.com" />
          <FormGroup label="Reference 1 *" type="number" placeholder="CUST ID / Sales query code" />
          <div className="form-group">
            <label htmlFor="amountType">Reference 2</label>
            <SelectField
              id="amountType"
              options={[
                { value: "Reference 2", label: "Reference 2" },
                { value: "fixed", label: "Fixed" },
              ]}
            />
          </div>
          <FormGroup label="Agent code*" type="tel" placeholder="Agent code*" />

        </div>

        <div className="terms-of-use pt-6">
          <p>
            By clicking Submit, you are agreeing to the 
            <Link href="#">Terms of Use</Link> and 
            <Link href="#">Privacy Policy</Link> and also agree to receive
            offers via email/sms.
          </p>

          <button
            type="submit"
            className="submit-btn flex w-full p-4 justify-center mt-8"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcfPhysicalForm;
