import { siteData } from './siteData';

export interface Project {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  gallery: string[];
}

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
  projects: Project[];
}

const transformedCategories = siteData.categorias.map(category => {
  const projects = category.produtos.map(product => ({
    id: product.slug,
    title: product.nome,
    coverImage: product.imagem,
    description: product.descricao,
    gallery: product.gallery || [],
  }));

  return {
    name: category.nome,
    slug: category.slug,
    image: category.imagem,
    description: category.produtos[0]?.descricao || 'Confira nossos projetos incríveis.',
    projects: projects,
  };
});

export const categoriesData: Category[] = transformedCategories;
