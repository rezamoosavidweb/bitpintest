import { Container, Main } from "./style";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
    return (
        <Container container direction="column">
            <Header />
            <Main container direction="column" padding={"43px 0"}>
                {children}
            </Main>
            <Footer />
        </Container>
    );
}
