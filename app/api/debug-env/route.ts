import { NextResponse } from "next/server";

/**
 * GET /api/debug-env - Endpoint de diagnóstico temporal para verificar variables de entorno
 * IMPORTANTE: Eliminar después de depurar
 */
export async function GET() {
  return NextResponse.json({
    message: "Debug de variables de entorno",
    ADMIN_USERNAME_EXISTS: !!process.env.ADMIN_USERNAME,
    ADMIN_USERNAME_VALUE: process.env.ADMIN_USERNAME || "(not set - using default 'admin')",
    ADMIN_PASSWORD_EXISTS: !!process.env.ADMIN_PASSWORD,
    ADMIN_PASSWORD_LENGTH: process.env.ADMIN_PASSWORD?.length || 0,
    // Mostrar primeros 3 caracteres de la contraseña para verificación
    ADMIN_PASSWORD_PREVIEW: process.env.ADMIN_PASSWORD 
      ? `${process.env.ADMIN_PASSWORD.substring(0, 3)}...` 
      : "(not set - using default)",
    NODE_ENV: process.env.NODE_ENV,
  });
}
