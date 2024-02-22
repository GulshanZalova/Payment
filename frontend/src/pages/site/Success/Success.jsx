import { Button, Result } from "antd";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MainContext from '../../../context/context'

const Success = () => {
  const { setBasketItems } = useContext(MainContext);

  useEffect(() => {
    setBasketItems([]);
  }, [setBasketItems]);

  return (
    <div className="success-page">
      <div className="container">
        <Result
          status="success"
          title="Ödeme Başarılı!"
          subTitle="Siparişiniz başarıyla tamamlandı"
          extra={[
            <Link to={"/"} key="home">
              <Button type="primary">Ana Sayfa</Button>,
            </Link>,

            <Link to={"/orders"}><Button  key="buy">Siparişlerim</Button></Link>,
          ]}
        />
      </div>
    </div>
  );
};

export default Success;