async function inserirItensRepository(params) {
    
    client.query(
    `INSERT INTO cart_item (cart_id, product_id, quantity)
             VALUES ($1, $2, $3)`,
    [cart_id, product_id, quantity]
  )
}

async function alterarItensRepository(params) {
    client.query(
        'UPDATE cart_item SET quantity = $1 WHERE id = $2 RETURNING *',
        [quantity, id]
    )
}


async function deletarItensRepository(params) {
    await client.query("DELETE FROM cart_item WHERE cart_id = $1", [id]);
}