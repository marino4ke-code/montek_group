* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  /* Hero section */
  section[style*="minHeight: '620px'"] {
    min-height: 500px !important;
  }

  /* Grids become single column */
  div[style*="gridTemplateColumns: 'repeat(3,1fr)'"],
  div[style*="gridTemplateColumns: \"repeat(3,1fr)\""] {
    grid-template-columns: 1fr !important;
  }

  div[style*="gridTemplateColumns: 'repeat(2,1fr)'"],
  div[style*="gridTemplateColumns: \"repeat(2,1fr)\""] {
    grid-template-columns: 1fr !important;
  }

  /* Footer grid */
  div[style*="gridTemplateColumns: '2fr 1fr 1fr 1fr'"] {
    grid-template-columns: 1fr 1fr !important;
  }
}

@media (max-width: 480px) {
  div[style*="gridTemplateColumns: '2fr 1fr 1fr 1fr'"] {
    grid-template-columns: 1fr !important;
  }
}
