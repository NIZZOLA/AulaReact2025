export default function Footer() {
    return (
        <footer style={{ background: "#222", color: "#fff", padding: "2rem 0" }}>
            <div style={{ display: "flex", justifyContent: "space-around", maxWidth: "900px", margin: "0 auto" }}>
                <div>
                    <h4>Institucional</h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><a href="/sobre" style={{ color: "#fff", textDecoration: "none" }}>Sobre</a></li>
                        <li><a href="/contato" style={{ color: "#fff", textDecoration: "none" }}>Contato</a></li>
                        <li><a href="/blog" style={{ color: "#fff", textDecoration: "none" }}>Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Redes Sociais</h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>Instagram</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
  }