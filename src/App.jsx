import React from "react";

function VSL() {
  const handleClick = () => {
    window.location.href = "https://tinyurl.com/formulaire-briseverest";
  };

  return (
    <div style={styles.container}>
      <div style={styles.banner}>
      <img src="/accompagnement/logo.png" alt="Logo" style={{ width: '90px', height: 'auto' }} />
      </div>
      <h1 style={styles.title}>
        Booste Tes Ventes en <span style={{ color: "green" }}>E-commerce</span>{" "}
        Grâce aux <span style={{ color: "green" }}>Influenceurs</span> !
      </h1>
      <p style={styles.subTitle}>
        Regarde <span style={{ color: "red" }}>maintenant</span> la vidéo
        ci-dessous :
      </p>
      <div style={styles.videoContainer}>
        <iframe
          width="100%"
          height="450"
          src="https://player.vimeo.com/video/1023686866?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          title="VSL"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            margin: "0",
            padding: "0",
            display: "block",
            verticalAlign: "bottom",
          }}
        ></iframe>
      </div>
      <p style={{ ...styles.formText, marginTop: "-10px" }}>
        Remplis ce formulaire 👇👇
      </p>
      <button style={styles.ctaButton} onClick={handleClick}>
        Tente de rejoindre l'accompagnement
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#000",
    color: "#fff",
  },
  banner: {
    width: "100%",
    backgroundColor: "#000",
    padding: "10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "-10px",
  },
  logo: {
    height: "90px",
  },
  title: {
    fontSize: "2.4em",
    color: "#fff",
    textAlign: "center",
    marginBottom: "0px",
  },
  subTitle: {
    fontSize: "1.3em",
    color: "#fff",
    textAlign: "center",
    marginBottom: "0px",
  },
  videoContainer: {
    width: "95%",
    maxWidth: "800px",
    marginBottom: "20px",
    paddingBottom: "0px",
    display: "flex", // assure l'alignement direct avec l'élément en dessous
    flexDirection: "column",
  },
  formText: {
    fontSize: "1.6em",
    color: "#fff",
    textAlign: "center",
    margin: "0",
    padding: "0",
    lineHeight: "1",
    marginTop: "-10px", // marge négative pour réduire l’espace entre vidéo et texte
  },
  ctaButton: {
    padding: "15px 25px",
    fontSize: "1em",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default VSL;