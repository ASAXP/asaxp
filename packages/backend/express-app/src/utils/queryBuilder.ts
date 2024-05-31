const qsb = {
  save(o: Record<string, string | number>, tableName: string) {
    const _fields = Object.keys(o);
    if (_fields.length === 0) {
      throw new Error("No fields to update");
    }
    const values = Object.values(o);
    return `INSERT INTO ${tableName} (${_fields.join(", ")}) VALUES (${_fields.map(() => "?").join(", ")}) `;
  },

  update(o: Record<string, string | number>, id: bigint, tableName: string) {
    const _fields = Object.keys(o);
    if (_fields.length === 0) {
      throw new Error("No fields to update");
    }

    const setClause = _fields.map((field) => `${field} = ?`).join(", ");
    const query = `UPDATE ${tableName} SET ${setClause} WHERE id = ?`;
    return query;
  },

  delete(o: Record<string, string | number>, id: bigint, tableName: string) {
    const _fields = Object.keys(o);
    if (_fields.length === 0) {
      throw new Error("No fields to update");
    }

    const setClause = _fields.map((field) => `${field} = ?`).join(", ");
    const query = `DELETE FROM ${tableName} WHERE id = ?`;
    // ??? //
  },
};

export default qsb;
