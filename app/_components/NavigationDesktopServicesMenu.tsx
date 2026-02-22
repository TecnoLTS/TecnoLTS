interface NavigationDesktopServiceItem {
  href: string;
  iconId: string;
  title: string;
  bgColor: string;
  iconColor: string;
  hoverBg: string;
}

interface NavigationDesktopServicesMenuProps {
  label: string;
  services: NavigationDesktopServiceItem[];
}

export default function NavigationDesktopServicesMenu({
  label,
  services,
}: NavigationDesktopServicesMenuProps) {
  return (
    <div className="group/menu relative">
      <button
        type="button"
        className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium py-2"
        aria-haspopup="menu"
      >
        {label}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover/menu:rotate-180 group-focus-within/menu:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div className="absolute top-full left-0 z-50 w-72 pt-2 opacity-0 invisible pointer-events-none translate-y-1 transition-all duration-200 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:pointer-events-auto group-hover/menu:translate-y-0 group-focus-within/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:pointer-events-auto group-focus-within/menu:translate-y-0">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden backdrop-blur-lg">
          <div className="p-2 space-y-1">
            {services.map((service) => {
              return (
                <a
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-300 group/item hover:translate-x-1 min-w-0"
                >
                  <div
                    className={`w-8 h-8 rounded-lg ${service.bgColor} ${service.hoverBg} flex items-center justify-center transition-all duration-500 group-hover/item:scale-105 group-hover/item:shadow-lg flex-shrink-0`}
                  >
                    <svg
                      className={`w-4 h-4 ${service.iconColor} group-hover/item:text-white transition-all duration-500 group-hover/item:scale-105`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <use href={`#${service.iconId}`} />
                    </svg>
                  </div>
                  <span className="min-w-0 flex-1 break-words text-gray-700 dark:text-gray-300 font-medium text-sm group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                    {service.title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
