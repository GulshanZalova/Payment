import { useState,useEffect } from "react";
const Orders = () => {
    const [dataSource, setDataSource] = useState([]);
    const secretKey="sk_test_51OmLmPDEw5jujyaH89jwTHhaT9FqoTrUfXaCCApecUGrvllgDUclzn9QFdcCFf61tmvv2I8YUVprZKoPCHCJBfyY00FiQiydXh"
    useEffect(() => {
        const fetchData = async () => {
    
          try {
            const response = await fetch(
              `https://api.stripe.com/v1/payment_intents`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${secretKey}`,
                },
              }
            );
    
            if (response.ok) {
              const { data } = await response.json();
              setDataSource(data);
            } else {
              message.error("Error");
            }
          } catch (error) {
            console.log("error:", error);
          } finally {
          }
        };
        fetchData();
      }, [secretKey]);
    
      console.log(dataSource);
    return (
        <div>
            {/* <ul>
                {
                    basketItems.map((item, index) => {
                        return (
                            <li key={index}>{item.totalPrice}AZN</li>
                        )
                    })
                }
            </ul> */}


        </div>
    )
}

export default Orders