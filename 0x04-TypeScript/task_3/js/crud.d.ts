// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Ambient type declarations for crud.js functions
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;