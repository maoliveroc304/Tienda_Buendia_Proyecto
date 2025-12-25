import { google } from 'googleapis';

// This would be configured with your actual credentials
const auth = new google.auth.GoogleAuth({
  // credentials: { client_email, private_key },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

interface ProductData {
  id: number;
  name: string;
  stock: number;
  price: string;
}

/**
 * Updates the inventory in the Google Sheet.
 * This is a placeholder and will need to be implemented with actual data.
 */
export async function updateInventorySheet(products: ProductData[]) {
  console.log('Updating Google Sheet with new inventory data...');

  // const resource = {
  //   values: products.map(p => [p.id, p.name, p.stock, p.price]),
  // };

  // try {
  //   const response = await sheets.spreadsheets.values.update({
  //     spreadsheetId: SPREADSHEET_ID,
  //     range: 'Inventario!A2', // Assumes a sheet named 'Inventario'
  //     valueInputOption: 'RAW',
  //     resource,
  //   });
  //   console.log('Google Sheet updated successfully:', response.data);
  //   return response.data;
  // } catch (error) {
  //   console.error('Error updating Google Sheet:', error);
  //   throw error;
  // }

  // Placeholder logic
  return Promise.resolve({
    spreadsheetId: SPREADSHEET_ID,
    updatedRange: 'Inventario!A2:D' + (products.length + 1),
    updatedRows: products.length,
  });
}
