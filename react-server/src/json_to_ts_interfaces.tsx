// Interfaces
export interface CustomJSONInterface {
    $schema: string
    $id: string
    title: string
    description: string
    type: string
    definitions: Definitions
    allOf: AllOf[]    
}

export interface Definitions {
    input_output_options: InputOutputOptions
    mandatory_arguments: MandatoryArguments
    skip_tools: SkipTools
    reference_genome_options: ReferenceGenomeOptions
    alevin_options: AlevinOptions
    starsolo_options: StarsoloOptions
    kallisto_bus_options: KallistoBusOptions
    cellranger_options: CellrangerOptions
    universc_options: UniverscOptions
    institutional_config_options: InstitutionalConfigOptions
    max_job_request_options: MaxJobRequestOptions
    generic_options: GenericOptions
}

export interface InputOutputOptions {
    title: string
    type: string
    fa_icon: string
    description: string
    required: string[]
    properties: Properties
}

export interface Properties {
    input: Input
    outdir: Outdir
    email: Email
    multiqc_title: MultiqcTitle
}

export interface Input {
    type: string
    format: string
    exists: boolean
    mimetype: string
    pattern: string
    description: string
    help_text: string
}

export interface Outdir {
    type: string
    format: string
    description: string
    fa_icon: string
}

export interface Email {
    type: string
    description: string
    fa_icon: string
    help_text: string
    pattern: string
}

export interface MultiqcTitle {
    type: string
    description: string
    fa_icon: string
}

export interface MandatoryArguments {
    title: string
    type: string
    description: string
    default: string
    properties: Properties2
    fa_icon: string
}

export interface Properties2 {
    barcode_whitelist: BarcodeWhitelist
    aligner: Aligner
    protocol: Protocol
}

export interface BarcodeWhitelist {
    type: string
    description: string
    fa_icon: string
}

export interface Aligner {
    type: string
    description: string
    default: string
    help_text: string
    fa_icon: string
    enum: string[]
}

export interface Protocol {
    type: string
    description: string
    default: string
    fa_icon: string
    enum: string[]
}

export interface SkipTools {
    title: string
    type: string
    description: string
    default: string
    fa_icon: string
    properties: Properties3
}

export interface Properties3 {
    skip_multiqc: SkipMultiqc
    skip_fastqc: SkipFastqc
}

export interface SkipMultiqc {
    type: string
    description: string
}

export interface SkipFastqc {
    type: string
    description: string
}

export interface ReferenceGenomeOptions {
    title: string
    type: string
    fa_icon: string
    description: string
    properties: Properties4
}

export interface Properties4 {
    genome: Genome
    fasta: Fasta
    igenomes_ignore: IgenomesIgnore
    transcript_fasta: TranscriptFasta
    gtf: Gtf
    save_reference: SaveReference
    igenomes_base: IgenomesBase
}

export interface Genome {
    type: string
    description: string
    fa_icon: string
    help_text: string
}

export interface Fasta {
    type: string
    format: string
    exists: boolean
    mimetype: string
    pattern: string
    description: string
    help_text: string
    fa_icon: string
}

export interface IgenomesIgnore {
    type: string
    description: string
    fa_icon: string
    hidden: boolean
    help_text: string
}

export interface TranscriptFasta {
    type: string
    description: string
    fa_icon: string
}

export interface Gtf {
    type: string
    description: string
    fa_icon: string
}

export interface SaveReference {
    type: string
    description: string
    fa_icon: string
}

export interface IgenomesBase {
    type: string
    format: string
    description: string
    default: string
    fa_icon: string
    hidden: boolean
}

export interface AlevinOptions {
    title: string
    type: string
    description: string
    default: string
    properties: Properties5
}

export interface Properties5 {
    salmon_index: SalmonIndex
    txp2gene: Txp2gene
    simpleaf_rlen: SimpleafRlen
}

export interface SalmonIndex {
    type: string
    description: string
    fa_icon: string
}

export interface Txp2gene {
    type: string
    description: string
    help_text: string
    fa_icon: string
}

export interface SimpleafRlen {
    type: string
    default: number
    description: string
    fa_icon: string
}

export interface StarsoloOptions {
    title: string
    type: string
    description: string
    default: string
    properties: Properties6
    fa_icon: string
}

export interface Properties6 {
    star_index: StarIndex
    star_ignore_sjdbgtf: StarIgnoreSjdbgtf
    seq_center: SeqCenter
    star_feature: StarFeature
}

export interface StarIndex {
    type: string
    description: string
    help_text: string
    fa_icon: string
}

export interface StarIgnoreSjdbgtf {
    type: string
    description: string
}

export interface SeqCenter {
    type: string
    description: string
}

export interface StarFeature {
    type: string
    default: string
    enum: string[]
    description: string
    fa_icon: string
}

export interface KallistoBusOptions {
    title: string
    type: string
    description: string
    default: string
    fa_icon: string
    properties: Properties7
}

export interface Properties7 {
    kallisto_gene_map: KallistoGeneMap
    kallisto_index: KallistoIndex
    kb_workflow: KbWorkflow
}

export interface KallistoGeneMap {
    type: string
    description: string
    fa_icon: string
}

export interface KallistoIndex {
    type: string
    description: string
    fa_icon: string
}

export interface KbWorkflow {
    type: string
    default: string
    description: string
    fa_icon: string
    enum: string[]
}

export interface CellrangerOptions {
    title: string
    type: string
    description: string
    default: string
    properties: Properties8
}

export interface Properties8 {
    cellranger_index: CellrangerIndex
}

export interface CellrangerIndex {
    type: string
    description: string
}

export interface UniverscOptions {
    title: string
    type: string
    description: string
    default: string
    properties: Properties9
}

export interface Properties9 {
    universc_index: UniverscIndex
    universc_technology: UniverscTechnology
}

export interface UniverscIndex {
    type: string
    description: string
}

export interface UniverscTechnology {
    type: string
    description: string
    default: string
}

export interface InstitutionalConfigOptions {
    title: string
    type: string
    fa_icon: string
    description: string
    help_text: string
    properties: Properties10
}

export interface Properties10 {
    custom_config_version: CustomConfigVersion
    custom_config_base: CustomConfigBase
    config_profile_name: ConfigProfileName
    config_profile_description: ConfigProfileDescription
    config_profile_contact: ConfigProfileContact
    config_profile_url: ConfigProfileUrl
}

export interface CustomConfigVersion {
    type: string
    description: string
    default: string
    hidden: boolean
    fa_icon: string
}

export interface CustomConfigBase {
    type: string
    description: string
    default: string
    hidden: boolean
    help_text: string
    fa_icon: string
}

export interface ConfigProfileName {
    type: string
    description: string
    hidden: boolean
    fa_icon: string
}

export interface ConfigProfileDescription {
    type: string
    description: string
    hidden: boolean
    fa_icon: string
}

export interface ConfigProfileContact {
    type: string
    description: string
    hidden: boolean
    fa_icon: string
}

export interface ConfigProfileUrl {
    type: string
    description: string
    hidden: boolean
    fa_icon: string
}

export interface MaxJobRequestOptions {
    title: string
    type: string
    fa_icon: string
    description: string
    help_text: string
    properties: Properties11
}

export interface Properties11 {
    max_cpus: MaxCpus
    max_memory: MaxMemory
    max_time: MaxTime
}

export interface MaxCpus {
    type: string
    description: string
    default: number
    fa_icon: string
    hidden: boolean
    help_text: string
}

export interface MaxMemory {
    type: string
    description: string
    default: string
    fa_icon: string
    pattern: string
    hidden: boolean
    help_text: string
}

export interface MaxTime {
    type: string
    description: string
    default: string
    fa_icon: string
    pattern: string
    hidden: boolean
    help_text: string
}

export interface GenericOptions {
    title: string
    type: string
    fa_icon: string
    description: string
    help_text: string
    properties: Properties12
}

export interface Properties12 {
    help: Help
    version: Version
    publish_dir_mode: PublishDirMode
    email_on_fail: EmailOnFail
    plaintext_email: PlaintextEmail
    max_multiqc_email_size: MaxMultiqcEmailSize
    monochrome_logs: MonochromeLogs
    hook_url: HookUrl
    multiqc_config: MultiqcConfig
    multiqc_logo: MultiqcLogo
    multiqc_methods_description: MultiqcMethodsDescription
    validate_params: ValidateParams
    validationShowHiddenParams: ValidationShowHiddenParams
    validationFailUnrecognisedParams: ValidationFailUnrecognisedParams
    validationLenientMode: ValidationLenientMode
}

export interface Help {
    type: string
    description: string
    fa_icon: string
    hidden: boolean
}

export interface Version {
    type: string
    description: string
    fa_icon: string
    hidden: boolean
}

export interface PublishDirMode {
    type: string
    default: string
    description: string
    help_text: string
    fa_icon: string
    enum: string[]
    hidden: boolean
}

export interface EmailOnFail {
    type: string
    description: string
    fa_icon: string
    pattern: string
    help_text: string
    hidden: boolean
}

export interface PlaintextEmail {
    type: string
    description: string
    fa_icon: string
    hidden: boolean
}

export interface MaxMultiqcEmailSize {
    type: string
    description: string
    pattern: string
    default: string
    fa_icon: string
    hidden: boolean
}

export interface MonochromeLogs {
    type: string
    description: string
    fa_icon: string
    hidden: boolean
}

export interface HookUrl {
    type: string
    description: string
    fa_icon: string
    help_text: string
    hidden: boolean
}

export interface MultiqcConfig {
    type: string
    format: string
    description: string
    fa_icon: string
    hidden: boolean
}

export interface MultiqcLogo {
    type: string
    description: string
    fa_icon: string
    hidden: boolean
}

export interface MultiqcMethodsDescription {
    type: string
    description: string
    fa_icon: string
}

export interface ValidateParams {
    type: string
    description: string
    default: boolean
    fa_icon: string
    hidden: boolean
}

export interface ValidationShowHiddenParams {
    type: string
    fa_icon: string
    description: string
    hidden: boolean
    help_text: string
}

export interface ValidationFailUnrecognisedParams {
    type: string
    fa_icon: string
    description: string
    hidden: boolean
    help_text: string
}

export interface ValidationLenientMode {
    type: string
    fa_icon: string
    description: string
    hidden: boolean
    help_text: string
}

export interface AllOf {
    $ref: string
}
