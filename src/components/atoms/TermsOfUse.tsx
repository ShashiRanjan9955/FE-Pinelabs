import React from "react";
import Link from "next/link";

const TermsOfUse: React.FC = () => {
  return (
    <p className="terms-of-use">
      By clicking Submit, you are agreeing to the <Link href="#">Terms of Use</Link> and <Link href="#">Privacy Policy</Link> and also agree to be contacted with and to receive offers via email/sms.
    </p>
  );
};

export default TermsOfUse;
