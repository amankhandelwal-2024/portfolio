// This file serves as an entry point for the package
import { Lenis } from './lenis'
globalThis.Lenis = Lenis
globalThis.Lenis.prototype = Lenis.prototype
