import PlanSection from "../components/PlanSection";
export const revalidate = 0;

export const plans = [
  {
    planType: "Small Business",
    description: "Built for growth",
    price: "$1399",
    features: [
      "Pause or cancel anytime",
      "One request at a time",
      "Average 48 hour delivery",
      "Unlimited users",
      "Unlimited features",
    ],
    buttonText: "Buy now",
    buttonLink:
      process.env.NODE_ENV === "production"
        ? "https://buy.stripe.com/cN28xg4U86ALacw3cc"
        : "",
    priceId:
      process.env.NODE_ENV === "production"
        ? "price_1PKkdiHlVYFFZza2F4Grce5B"
        : "",
  },
  {
    planType: "Middle Business",
    description: "Built for scalability",
    price: "$1999",
    features: [
      "Pause or cancel anytime",
      "Two requests at a time",
      "Average 48 hour delivery",
      "Unlimited users",
      "Unlimited features",
    ],
    buttonText: "Try for free",
    buttonLink:
      process.env.NODE_ENV === "production"
        ? "https://buy.stripe.com/7sIbJs0DS3ozacw5km"
        : "",
    buttonSubText: "2 days",
    isPopular: true,
    priceId:
      process.env.NODE_ENV === "production"
        ? "price_1PKkdTHlVYFFZza2qw0OeQjR"
        : "",
  },
  {
    planType: "Large Business",
    description: "Built for limitless",
    price: "$2599",
    features: [
      "Pause or cancel anytime",
      "Two requests at a time",
      "Average 48 hour delivery",
      "Unlimited users",
      "Unlimited features",
    ],
    buttonText: "Try for free",
    buttonLink:
      process.env.NODE_ENV === "production"
        ? "https://buy.stripe.com/4gweVE0DSf7hfwQ6op"
        : "",
    buttonSubText: "4 days",
    priceId:
      process.env.NODE_ENV === "production"
        ? "price_1PKkd8HlVYFFZza2IEwoSjn9"
        : "",
  },
];
export default async function SecretPricing() {
  return (
    <div className="my-8 ">
      <div className="mt-12 grid max-w-7xl mx-auto grid-cols-1 gap-12 lg:gap-3 lg:grid-cols-5 px-8">
        {plans.map((plan, index) => (
          <PlanSection key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
