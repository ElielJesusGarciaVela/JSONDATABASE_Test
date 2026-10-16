import { Usuario, Prestamo } from '../index/index.component'; // Busca automáticamente el index.ts

const API_URL = 'http://localhost:3000';

export async function obtenerUsuarios(): Promise<Usuario[]> {
    const res = await fetch(`${API_URL}/usuarios`);
    return res.json();
}