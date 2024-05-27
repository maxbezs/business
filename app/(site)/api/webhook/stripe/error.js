import { NextResponse } from "next/server";

export function handleError(err) {
  console.error(`❌ Error message: ${err.message}`);
  return NextResponse.json({ error: err.message }, { status: 400 });
}
