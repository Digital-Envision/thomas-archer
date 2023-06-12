import { useEffect } from 'react'

const useHubspot = ({ isOpen = false, region, portalId, formId, target }) => {
    const loadHubspot = () => {
        // @TS-ignore
        if ((window as any).hbspt) {
            // @TS-ignore
            ;(window as any).hbspt.forms.create({
                region: region,
                portalId: portalId,
                formId: formId,
                target: target,
            })
        }
    }

    useEffect(() => {
        const script = document.createElement('script')

        if (region && portalId && formId && isOpen) {
            script.src = 'https://js.hsforms.net/forms/shell.js'
            document.body.appendChild(script)
            script.addEventListener('load', loadHubspot)
        }

        return () => {
            if (!isOpen) {
                script.removeEventListener('load', loadHubspot)
            }
        }
    }, [isOpen])
}

export default useHubspot
