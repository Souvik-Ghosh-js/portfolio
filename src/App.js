import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "SOUVIK GHOSH",
    location: "Kolkata, INDIA",
    email: "souvikghoshkalna@gmail.com",
    availability: "Open for work",
    brand:
      "I'm a backend developer with a strong acquisition power to cope up with new technologies. I have good visualizations in UI/UX and hence can develop dynamic web site and web applications.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
