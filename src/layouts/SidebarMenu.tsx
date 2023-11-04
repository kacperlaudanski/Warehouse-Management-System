interface Sidebar {
  isSidebarShown: boolean;
}
export default function SidebarMenu({ isSidebarShown }: Sidebar) {
  return (
    <aside
      className={`${
        isSidebarShown ? `w-52` : `w-28`
      } transition-all duration-300 ease-in-out pt-24 px-5 h-screen bg-neutral-600 relative t-20 z-0`}
    >
      rrithirbuh
    </aside>
  );
}
