import { useState, useEffect } from "react";
import axios from "axios";
import type { productType } from "../types/productType";
    

const useGetProducts = (limit?: number | null, category?: string) => {

    const [products, setProducts] = useState<productType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const categoryFormated = category ? category.replace(/\s+/g, '-').toLowerCase() : '';

    useEffect(() => {
        const controller = new AbortController();

        const URL = 'https://dummyjson.com/products/'
            + (category ? `category/${categoryFormated}` : '')
            + (limit ? `?limit=${limit}` : '?limit=28');

        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get<{ products: productType[] }>(URL, { signal: controller.signal });
                setProducts(response.data.products);
                console.log("Fetched products:", response.data.products);
                setError(null);
            } catch (err) {
                if ((err as Error).name !== 'AbortError' && !axios.isCancel(err)) {
                    setError("Failed to fetch products");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
        return () => controller.abort();
    }, [limit, category]);

  return { products, loading, error };
};

export default useGetProducts;