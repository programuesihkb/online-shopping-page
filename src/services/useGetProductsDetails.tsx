import { useState, useEffect } from "react";
import axios from "axios";


type productDetailsType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    quantity: number;

};
    

const useGetProductsDetails = (cartItemsDetails: any[]) => {

    const [products, setProducts] = useState<productDetailsType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchProducts = async () => {
            if (cartItemsDetails.length === 0) {
                setProducts([]);
                setError(null);
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const responses = await Promise.all(
                    cartItemsDetails.map((item) =>
                        axios.get<productDetailsType>(`https://dummyjson.com/products/${item.productId}`, { signal: controller.signal })
                    )
                );
                setProducts(responses.map((response, index) => ({
                    ...response.data,
                    quantity: cartItemsDetails[index].quantity,
                })));
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
    }, [cartItemsDetails]);

  return { products, loading, error };
};

export default useGetProductsDetails;