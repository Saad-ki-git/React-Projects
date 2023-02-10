import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
import LandingSection from "./Components/LandingSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactMeSection from "./Components/ContactMeSection";
import Footer from "./Components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./Components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;

