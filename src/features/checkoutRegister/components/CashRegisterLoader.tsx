import { Box, Typography } from '@mui/material';
import React from 'react';
import { PointOfSaleOutlined } from '@mui/icons-material';

const CashRegisterLoader: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        zIndex: 9999,
        '& .breathing': {
          animation: 'breathe 1.5s ease-in-out infinite'
        },
        '@keyframes breathe': {
          '0%, 100%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.2)'
          }
        }
      }}
    >
      <PointOfSaleOutlined className="breathing" sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
      <Typography variant="h4" color="primary" fontWeight="bold" textAlign="center">
        Verificando caja...
      </Typography>
    </Box>
  );
};

export default CashRegisterLoader;