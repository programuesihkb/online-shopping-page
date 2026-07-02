import { Box, Typography } from "@mui/material";
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useState, useEffect } from "react";


type Category = { slug: string; name: string };

const CategoriesSidebar = ({ setSelectedCategory }: { setSelectedCategory: (category: string) => void }) => {

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Fetch categories from the same source products are fetched from
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products/categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);


  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(slug);
  };

  return (
    <Box sx={{ 
        minHeight: 352, 
        minWidth: 200,
        mt: 6,
        pl: 2,
    }}>
          <SimpleTreeView sx={{
            '& .MuiTreeItem-root': {
              transition: 'background-color 0.3s ease',
            },
          }}>
            <Typography variant="h6" sx={{ mb: 1, ml: 1, color: 'text.primary', fontWeight: 'bold' }}>
              Categories
            </Typography>
            {categories.map((category) => (
              <TreeItem
                key={category.slug}
                itemId={category.slug}
                label={`> ${category.name}`}
                onClick={() => handleCategoryClick(category.slug)}
              />
            ))}
          </SimpleTreeView>
        </Box>
  );
};

export default CategoriesSidebar;

