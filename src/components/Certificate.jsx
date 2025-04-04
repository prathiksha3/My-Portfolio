import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Modal, IconButton, Box, Backdrop, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box component="div" sx={{ width: "100%" }}>
      <Tilt
    glareEnable={true}
    glareMaxOpacity={0.3}
    glareColor="#ffffff"
    glarePosition="bottom"
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    transitionSpeed={500}
  >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            width: "400px",
            height: "300px",
            margin: "0 auto",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
              "& .overlay": { opacity: 1 },
              "& .hover-content": { 
                transform: "translate(-50%, -50%)",
                opacity: 1
              },
              "& .certificate-image": {
                filter: "contrast(1.05) brightness(1) saturate(1.1)"
              }
            }
          }}
        >
          {/* Rest of the thumbnail content remains the same */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                zIndex: 1
              }
            }}
          >
            <img
              className="certificate-image"
              src={ImgSertif}
              alt="Certificate"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
                transition: "filter 0.3s ease"
              }}
              onClick={handleOpen}
            />
          </Box>

          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              transition: "all 0.3s ease",
              zIndex: 2
            }}
            onClick={handleOpen}
          >
            <Box
              className="hover-content"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -60%)",
                opacity: 0,
                transition: "all 0.4s ease",
                textAlign: "center",
                width: "100%",
                color: "white"
              }}
            >
              <FullscreenIcon
                sx={{
                  fontSize: 40,
                  mb: 1,
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                }}
              >
                View Certificate
              </Typography>
            </Box>
          </Box>
        </Box>
      </Tilt>

      {/* Modal remains unchanged */}
      <Modal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(5px)"
          }
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.9)"
          }
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none"
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "white",
              bgcolor: "rgba(0,0,0,0.6)",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.8)",
                transform: "scale(1.1)"
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={ImgSertif}
            alt="Certificate Full View"
            style={{
              maxWidth: "100%",
              maxHeight: "90vh",
              objectFit: "contain"
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificate;