import React from "react";
import { useDispatch } from "react-redux";
import { CreatePayment, VerifyPayment } from "../../redux/slice/paymentSlice";

const Razorpay = ({ info }) => {
  const dispatch = useDispatch();
    console.log(info)
  const openRazorpay = async (order) => {
    try {
        const options = {
            key: "rzp_test_xPA12bjEmGQvZO",
            amount: Number(order.amount),
            currency: order.currency,
            name: "JOGA JOGO",
            description: "Service charge",
            order_id: order.id,
            handler: async function (response) {
              try {
                console.log(response, info, 51);
                const verifyPayload = {
                  ...response,
                    info
                };
                const result = await dispatch(VerifyPayment(verifyPayload));
                console.log(result.payload);
              } catch (error) {
                console.log(error);
              }
            },
          };
          const razorpay = new window.Razorpay(options);
          razorpay.open();
    } catch (error) {
        console.log(error)
    }
  };
  const createPayment = async () => {
    try {
      const result = await dispatch(CreatePayment({ amount:info?.price }));
      console.log(result?.payload?.success);
      if (result?.payload?.success) {
        openRazorpay(result.payload.order);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={createPayment}>{`Confirm and pay ${info?.price}`}</button>
    </div>
  );
};

export default Razorpay;
