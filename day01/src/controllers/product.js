import axios from "axios";

export const getAllProducts = async (req, res) => {
    try {
        const { data: products } = await axios.get("http://localhost:3001/products");
        if (products == 0) {
            return res.status(404).json({
                message: "Khong co san pham nao"
            })
        }
        return res.status(200).json(products)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

export const getOneProduct = async (req, res) => {
    const { data: product } = await axios.get(`http://localhost:3001/products/${req.params.id}`);
    try {
        if (!product) {
            return res.status(404).json({
                message: "Not Found product"
            })
        }
        return res.status(200).json(product)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

export const addProduct = async (req, res) => {
    const { data: product } = await axios.post("http://localhost:3001/products", req.body)
    return res.status(201).json({
        message: "Post success",
        data: product
    })
}

export const UpdateProduct = async (req, res) => {
    const { data: product } = await axios.put(`http://localhost:3001/products/${req.params.id}`, req.body);
    try {
        if (!product) {
            return res.status(404).json({
                message: "Khong co san pham"
            })
        }
        return res.status(200).json(product)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

export const removeProduct = async (req, res) => {
    try {
        await axios.delete(`http://localhost:3001/products/${req.params.id}`)
        return res.status(200).json({
            message: "Delete success",
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const patchProduct = async (req, res) => {
    const { data: product } = await axios.put(`http://localhost:3001/products/${req.params.id}`, req.body);
    try {
        if (!product) {
            return res.status(404).json({
                message: "Khong co san pham"
            })
        }
        return res.status(200).json(product)
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}