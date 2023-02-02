import { derived, writable } from 'svelte/store'

interface FormType {
    email: string
    name: string
    phone: string
    email2: string
    name2: string
    addtional: string
}
export const form = writable<FormType>({} as FormType)

export const emailVal = writable<string>('')
export const nameVal = writable<string>('')
export const phoneVal = writable<string>('')
export const additionalVal = writable<string>('')
export const emailVal2 = writable<string>('')
export const nameVal2 = writable<string>('')

export const vaildateEmail = derived(emailVal, ($val) =>
    $val.includes('@') ? $val : ''
)
export const validateName = derived(nameVal, ($val) =>
    $val.length > 6 ? $val : ''
)
export const validatePhone = derived(phoneVal, ($val) => $val)
export const validateAdditional = derived(additionalVal, ($val) => $val)

export const hasErrPage0 = derived(
    [vaildateEmail, validateName, validatePhone, validateAdditional],
    ([$email, $name, $phone, $additional]) => {
        if (!$email || !$name || !$phone || !$additional) return true
        return false
    }
)

function formHandler() {
    const { set, subscribe, update } = form
    const { subscribe: emailSub } = emailVal
    const { subscribe: nameSub } = nameVal
    const { subscribe: phoneSub } = phoneVal
    const { subscribe: additionalSub } = additionalVal
    const { subscribe: emailSub2 } = emailVal2
    const { subscribe: nameSub2 } = nameVal2

    return {
        subscribe,
        save: () =>
            update((curr) => {
                // validation func
                form.subscribe((f) => {
                    emailSub((v) => (f['email'] = v))
                    nameSub((v) => (f['name'] = v))
                    phoneSub((v) => (f['phone'] = v))
                    additionalSub((v) => (f['addtional'] = v))
                    emailSub2((v) => (f['email2'] = v))
                    nameSub2((v) => (f['name2'] = v))
                    curr = f
                })
                return curr
            }),
        clearSaved: () => set({} as FormType),
        clearFields: () => {
            emailVal.set('')
            nameVal.set('')
            phoneVal.set('')
            additionalVal.set('')
            emailVal2.set('')
            nameVal2.set('')
        },
    }
}

export const formStore = formHandler()
