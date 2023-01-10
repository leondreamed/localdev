import splitLines from 'split-lines'
import terminalSize from 'term-size'
import wrapAnsi from 'wrap-ansi'

/**
	Get the text as an array of lines as they would be displayed in the terminal
*/
export function getWrappedText(text: string): string[] {
	const terminalWidth = terminalSize().columns
	return splitLines(
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- broken types
		(wrapAnsi.default ?? wrapAnsi)(text, terminalWidth, {
			trim: false,
			hard: true,
		})
	)
}
