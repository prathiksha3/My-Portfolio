import { Grid } from "@mui/material";
import Certificate from "./Certificate"; // Adjust the import path

const CertificatesGrid = ({ certificates }) => {
  return (
    <Grid container spacing={3}>
      {certificates.map((cert, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Certificate ImgSertif={cert.imageUrl} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CertificatesGrid;