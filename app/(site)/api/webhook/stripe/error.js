export function handleError(err, res) {
  console.error(`❌ Error message: ${err.message}`);
  return res.status(400).json({ error: err.message });
}
