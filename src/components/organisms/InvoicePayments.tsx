"use client"

import React, { useEffect, useState } from 'react'
import MakeYourPayment from '../molecules/MakeYourPayment'
import QueriesBanner from '../molecules/QueriesBanner/QueriesBanner'
import { fetchInvoicePaymentsApi } from '@/lib/api/InvoicePayments';

function InvoicePayments() {

  const [data, setData] = useState<any>(null); // Store API response

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchInvoicePaymentsApi();
        setData(response);

        console.log(response , 'response data');
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    <MakeYourPayment data={data}/>
    <QueriesBanner data={data}/>
    </>
  )
}

export default InvoicePayments