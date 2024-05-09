function WebsiteLink({ link }) {
    return (
        <>
            <a
                class="flex self-end dark:text-[#242424] select-none items-center gap-3 rounded-lg bg-[#cccccc] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 active:opacity-[0.75] active:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
                href={link}
            >
                <img
                src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png"
                alt="metamask"
                class="h-6 w-6"
                />
                Visit Trial
            </a>
        </>
    )
}

function GitHubCode({ link }) {
  return (
    <>
      <a
        class="flex self-end dark:text-[#242424] select-none items-center gap-3 rounded-lg bg-[#cccccc] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 active:opacity-[0.75] active:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        data-ripple-dark="true"
        href={link}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
          alt="metamask"
          class="h-6 w-6"
        />
        View Code
      </a>
    </>
  );
}

function WhatsappShare({ link }) {
  return (
    <a
      class="flex self-end dark:text-[#242424] select-none items-center gap-3 rounded-lg bg-[#cccccc] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 active:opacity-[0.75] active:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
      href={`whatsapp://send?text=${encodeURI(link)}`}
      data-action="share/whatsapp/share"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
        alt="metamask"
        class="h-6 w-6"
      />
      Share
    </a>
  );
}

function FacebookShare({ link }) {
  return (
    <a
      class="flex self-end dark:text-[#242424] select-none items-center gap-3 rounded-lg bg-[#cccccc] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 active:opacity-[0.75] active:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(link)}`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        alt="metamask"
        class="h-6 w-6"
      />
      Share
    </a>
  );
}

export {
    WebsiteLink,
    GitHubCode,
    WhatsappShare,
    FacebookShare,
}