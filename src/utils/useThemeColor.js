export const useThemeColors = (isDarkEnabled) => {
    return {
      primary: isDarkEnabled ? "#040836" : "#FFFFFF",
      secondary: isDarkEnabled ? "#EAEDF6" : "#3C4E6D",
      background: isDarkEnabled ? "#040836" : "#111827",
      secondbackground: isDarkEnabled ? "#040836" : "#FFFF",
      layoutbg: isDarkEnabled ? "#040836" : "#070a68",
      layoutbottombg: isDarkEnabled ? "#040836" : "#f4f6f8",
      text: isDarkEnabled ? "#fff" : "#3C4E6D",
      shadowColor: isDarkEnabled ? "gray" : "gray",
      borderColor: isDarkEnabled ? "#1f2937" : "#e5e7eb",
      cardBg: isDarkEnabled ? "#0e1a49" : "#fff",
      inputBackground: isDarkEnabled ? "#EEEFF2" : "#B4DBF9", 
      editbg: isDarkEnabled ? "#0d012d":"#e5f2ff",
      edittext: isDarkEnabled ? "#fff":"#131069",
    };
  };