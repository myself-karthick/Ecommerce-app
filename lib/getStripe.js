import { loadStripe } from "@stripe/stripe-js";
let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51MBAXhSFjXrXr75n0O9G8Ij7W3t5kZYWxzNzJZNRyIWCWh4N5NJpxo7yJDttdKykb9T8dPfkRQavNIqLB5iav9Bo00JNO56H8Q');
    }
    return stripePromise;
}

export default getStripe; 