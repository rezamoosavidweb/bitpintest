import MainLayout from './MainLayout';

function Layout({ children, type }) {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}

export default Layout;
