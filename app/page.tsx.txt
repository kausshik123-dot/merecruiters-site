// app/page.tsx (Next.js)

export default function Home() {
  return (
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{ background: "#1f3c88", color: "#fff", padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px" }}>Middle East Recruiters</h1>
        <p>Trusted Overseas Job Placement Agency</p>
        <a href="https://wa.me/91XXXXXXXXXX" style={{ background: "#25D366", padding: "14px 28px", borderRadius: "30px", color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          Apply on WhatsApp
        </a>
      </section>

      {/* JOBS */}
      <section style={{ padding: "50px 20px", textAlign: "center" }}>
        <h2>Urgent Job Openings</h2>
        <p>Driver | Electrician | Plumber | Carpenter | Security Guard</p>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "70px 20px", background: "#f5f7fa", textAlign: "center" }}>
        <h2>Real Success Stories</h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>

          {[
            { img: "/images/imran.jpg", name: "Imran Khan", text: "Electrician job in Abu Dhabi" },
            { img: "/images/suresh-thapa.jpg", name: "Suresh Thapa", text: "Plumber job in Dubai" },
            { img: "/images/driver-real.jpg", name: "Mohammed Arif", text: "Driver job in UAE" },
            { img: "/images/truck-driver.jpg", name: "Salman Khan", text: "Heavy driver job" },
            { img: "/images/taxi-drivers.jpg", name: "Ajay & Rafiq", text: "Taxi jobs in Dubai" }
          ].map((item, i) => (
            <div key={i} style={{ width: "280px", background: "#fff", borderRadius: "12px", padding: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
              <img src={item.img} style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "10px" }} />
              <p>★★★★★</p>
              <p>{item.text}</p>
              <h4>{item.name}</h4>
            </div>
          ))}

        </div>

        <div style={{ marginTop: "30px" }}>
          <a href="https://wa.me/91XXXXXXXXXX" style={{ background: "#25D366", padding: "14px 28px", borderRadius: "30px", color: "#fff", textDecoration: "none" }}>
            Apply Now
          </a>
        </div>
      </section>

      {/* POPUP */}
      <div id="popup" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", maxWidth: "400px" }}>
          <img src="/images/ad-banner.jpg" style={{ width: "100%", borderRadius: "10px" }} />
          <button onClick={() => document.getElementById('popup').style.display = 'none'} style={{ position: "absolute", top: 10, right: 10 }}>X</button>
        </div>
      </div>

    </div>
  );
}
