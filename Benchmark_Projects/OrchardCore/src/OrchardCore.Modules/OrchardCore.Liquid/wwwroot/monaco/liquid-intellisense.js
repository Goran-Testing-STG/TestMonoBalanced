/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

var liquidTags = ['if', 'else', 'elseif', 'endif', 'render', 'assign', 'capture', 'endcapture', 'case', 'endcase', 'comment', 'endcomment', 'cycle', 'decrement', 'for', 'endfor', 'include', 'increment', 'layout', 'raw', 'endraw', 'render', 'tablerow', 'endtablerow', 'unless', 'endunless'];
var liquidFilters = ['abs', 'append', 'at_least', 'at_most', 'capitalize', 'ceil', 'compact', 'date', 'default', 'divided_by', 'downcase', 'escape', 'escape_once', 'first', 'floor', 'join', 'json', 'last', 'lstrip', 'map', 'minus', 'modulo', 'newline_to_br', 'plus', 'prepend', 'remove', 'remove_first', 'replace', 'replace_first', 'reverse', 'round', 'rstrip', 'size', 'slice', 'sort', 'sort_natural', 'split', 'strip', 'strip_html', 'strip_newlines', 'times', 'truncate', 'truncatewords', 'uniq', 'upcase', 'url_decode', 'url_encode', 'where'];
function getLiquidContextInfo(model, position, triggerCharacter) {
  var inTag;
  var inObject;
  var showTags;
  var showFilters;
  var findStart = model.findPreviousMatch('\\{(%|\\{)', position, true, false, null, true);
  if (findStart && findStart.matches && !position.isBefore(findStart.range.getEndPosition())) {
    if (findStart.matches[1] == '%') {
      inTag = true;
    } else if (findStart.matches[1] == '{') {
      inObject = true;
    }
    var searchPattern = inTag ? '%}' : '}}';
    var findEnd = model.findNextMatch(searchPattern, position, false, false, null, true);
    var currentRange = findStart.range.plusRange(findEnd.range);
    if (currentRange.containsPosition(position)) {
      if (inTag) {
        var findTagName = model.findNextMatch('\\{%\\s*([a-zA-Z-_]+)', findStart.range.getStartPosition(), true, false, null, true);
        if (findTagName && currentRange.containsRange(findTagName.range) && findTagName.matches.length > 1) {
          if (findTagName.matches[1] == 'assign') {
            showFilters = true;
          } else {
            showTags = false;
          }
        } else {
          showTags = true;
        }
      } else {
        showFilters = true;
      }
    }
  }
  return {
    showFilters: showFilters,
    showTags: showTags,
    inTag: inTag,
    inObject: inObject
  };
}
var completionItemProvider = {
  triggerCharacters: [' '],
  provideCompletionItems: function provideCompletionItems(model, position, context, token) {
    var items = [];
    if (context.triggerCharacter == ' ') {
      var startTrigger = model.getValueInRange(new monaco.Range(position.lineNumber, position.column - 3, position.lineNumber, position.column - 1));
      if (startTrigger != '{%' && !startTrigger.endsWith('|')) {
        return null;
      }
    }
    var liquidContext = getLiquidContextInfo(model, position, context.triggerCharacter);
    if (liquidContext.showFilters) {
      items = liquidFilters;
    } else if (liquidContext.showTags) {
      items = liquidTags.filter(function (value) {
        return !value.startsWith('end');
      });
    }
    var suggestions = items.map(function (value) {
      return {
        label: value,
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: value,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.KeepWhitespace
      };
    });
    return {
      suggestions: suggestions
    };
  }
};
function ConfigureLiquidIntellisense(monaco, suggestHtml) {
  if (suggestHtml === void 0) {
    suggestHtml = true;
  }
  if (suggestHtml) {
    var modeConfiguration = {
      completionItems: true,
      colors: true,
      foldingRanges: true,
      selectionRanges: true,
      diagnostics: false,
      documentFormattingEdits: true,
      documentRangeFormattingEdits: true
    };
    var options = {
      format: monaco.languages.html.htmlDefaults.options.format,
      suggest: {
        html5: true
      }
    };
    monaco.languages.html.registerHTMLLanguageService('liquid', options, modeConfiguration);
  }
  monaco.languages.registerCompletionItemProvider('liquid', completionItemProvider);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpcXVpZC1pbnRlbGxpc2Vuc2UudHMiLCJsaXF1aWQtaW50ZWxsaXNlbnNlLmpzIl0sIm5hbWVzIjpbImxpcXVpZFRhZ3MiLCJsaXF1aWRGaWx0ZXJzIiwiZ2V0TGlxdWlkQ29udGV4dEluZm8iLCJtb2RlbCIsInBvc2l0aW9uIiwidHJpZ2dlckNoYXJhY3RlciIsImluVGFnIiwiaW5PYmplY3QiLCJzaG93VGFncyIsInNob3dGaWx0ZXJzIiwiZmluZFN0YXJ0IiwiZmluZFByZXZpb3VzTWF0Y2giLCJtYXRjaGVzIiwiaXNCZWZvcmUiLCJyYW5nZSIsImdldEVuZFBvc2l0aW9uIiwic2VhcmNoUGF0dGVybiIsImZpbmRFbmQiLCJmaW5kTmV4dE1hdGNoIiwiY3VycmVudFJhbmdlIiwicGx1c1JhbmdlIiwiY29udGFpbnNQb3NpdGlvbiIsImZpbmRUYWdOYW1lIiwiZ2V0U3RhcnRQb3NpdGlvbiIsImNvbnRhaW5zUmFuZ2UiLCJsZW5ndGgiLCJjb21wbGV0aW9uSXRlbVByb3ZpZGVyIiwidHJpZ2dlckNoYXJhY3RlcnMiLCJwcm92aWRlQ29tcGxldGlvbkl0ZW1zIiwiY29udGV4dCIsInRva2VuIiwiaXRlbXMiLCJzdGFydFRyaWdnZXIiLCJnZXRWYWx1ZUluUmFuZ2UiLCJtb25hY28iLCJSYW5nZSIsImxpbmVOdW1iZXIiLCJjb2x1bW4iLCJlbmRzV2l0aCIsImxpcXVpZENvbnRleHQiLCJmaWx0ZXIiLCJ2YWx1ZSIsInN0YXJ0c1dpdGgiLCJzdWdnZXN0aW9ucyIsIm1hcCIsImxhYmVsIiwia2luZCIsImxhbmd1YWdlcyIsIkNvbXBsZXRpb25JdGVtS2luZCIsIktleXdvcmQiLCJpbnNlcnRUZXh0IiwiaW5zZXJ0VGV4dFJ1bGVzIiwiQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZSIsIktlZXBXaGl0ZXNwYWNlIiwiQ29uZmlndXJlTGlxdWlkSW50ZWxsaXNlbnNlIiwic3VnZ2VzdEh0bWwiLCJtb2RlQ29uZmlndXJhdGlvbiIsImNvbXBsZXRpb25JdGVtcyIsImNvbG9ycyIsImZvbGRpbmdSYW5nZXMiLCJzZWxlY3Rpb25SYW5nZXMiLCJkaWFnbm9zdGljcyIsImRvY3VtZW50Rm9ybWF0dGluZ0VkaXRzIiwiZG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0cyIsIm9wdGlvbnMiLCJmb3JtYXQiLCJodG1sIiwiaHRtbERlZmF1bHRzIiwic3VnZ2VzdCIsImh0bWw1IiwicmVnaXN0ZXJIVE1MTGFuZ3VhZ2VTZXJ2aWNlIiwicmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxDQUNmLElBQUksRUFDSixNQUFNLEVBQ04sUUFBUSxFQUNSLE9BQU8sRUFDUCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxFQUNaLE9BQU8sRUFDUCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixLQUFLLEVBQ0wsUUFBUSxFQUNSLFFBQVEsRUFDUixVQUFVLEVBQ1YsYUFBYSxFQUNiLFFBQVEsRUFDUixXQUFXLENBQ2Q7QUFFRCxJQUFNQyxhQUFhLEdBQUcsQ0FDbEIsS0FBSyxFQUNMLFFBQVEsRUFDUixVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixRQUFRLEVBQ1IsYUFBYSxFQUNiLE9BQU8sRUFDUCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxPQUFPLEVBQ1AsUUFBUSxFQUNSLGVBQWUsRUFDZixNQUFNLEVBQ04sU0FBUyxFQUNULFFBQVEsRUFDUixjQUFjLEVBQ2QsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsRUFDUixNQUFNLEVB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VywyQkFBMkIsQ0FBQ3BCLE1BQVcsRUFBRXFCLFdBQTJCLEVBQUE7RUFBM0IsSUFBQUEsV0FBQSxLQUFBLEtBQUEsQ0FBQSxFQUFBO0lBQUFBLFdBQUEsR0FBQSxJQUEyQjtFQUFBO0VBQ3pFLElBQUlBLFdBQVcsRUFBRTtJQUNiLElBQUlDLGlCQUFpQixHQUE0QztNQUM3REMsZUFBZSxFQUFFLElBQUk7TUFDckJDLE1BQU0sRUFBRSxJQUFJO01BQ1pDLGFBQWEsRUFBRSxJQUFJO01BQ25CQyxlQUFlLEVBQUUsSUFBSTtNQUNyQkMsV0FBVyxFQUFFLEtBQUs7TUFDbEJDLHVCQUF1QixFQUFFLElBQUk7TUFDN0JDLDRCQUE0QixFQUFFO0lDZGxDLENEZUM7SUFDRCxJQUFJQyxPQUFPLEdBQWtDO01BQ3pDQyxNQUFNLEVBQUUvQixNQUFNLENBQUNhLFNBQVMsQ0FBQ21CLElBQUksQ0FBQ0MsWUFBWSxDQUFDSCxPQUFPLENBQUNDLE1BQU07TUFDekRHLE9BQU8sRUFBRTtRQUFFQyxLQUFLLEVBQUU7TUFBSTtJQ2QxQixDRGVDO0lBQ0RuQyxNQUFNLENBQUNhLFNBQVMsQ0FBQ21CLElBQUksQ0FBQ0ksMkJBQTJCLENBQUMsUUFBUSxFQUFFTixPQUFPLEVBQUVSLGlCQUFpQixDQUFDO0VDZDNGO0VEaUJBdEIsTUFBTSxDQUFDYSxTQUFTLENBQUN3Qiw4QkFBOEIsQ0FBQyxRQUFRLEVBQUU3QyxzQkFBc0IsQ0FBQztBQUNyRiIsImZpbGUiOiJsaXF1aWQtaW50ZWxsaXNlbnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL21vbmFjby5kLnRzXCIgLz5cclxuXHJcbmNvbnN0IGxpcXVpZFRhZ3MgPSBbXHJcbiAgICAnaWYnLFxyXG4gICAgJ2Vsc2UnLFxyXG4gICAgJ2Vsc2VpZicsXHJcbiAgICAnZW5kaWYnLFxyXG4gICAgJ3JlbmRlcicsXHJcbiAgICAnYXNzaWduJyxcclxuICAgICdjYXB0dXJlJyxcclxuICAgICdlbmRjYXB0dXJlJyxcclxuICAgICdjYXNlJyxcclxuICAgICdlbmRjYXNlJyxcclxuICAgICdjb21tZW50JyxcclxuICAgICdlbmRjb21tZW50JyxcclxuICAgICdjeWNsZScsXHJcbiAgICAnZGVjcmVtZW50JyxcclxuICAgICdmb3InLFxyXG4gICAgJ2VuZGZvcicsXHJcbiAgICAnaW5jbHVkZScsXHJcbiAgICAnaW5jcmVtZW50JyxcclxuICAgICdsYXlvdXQnLFxyXG4gICAgJ3JhdycsXHJcbiAgICAnZW5kcmF3JyxcclxuICAgICdyZW5kZXInLFxyXG4gICAgJ3RhYmxlcm93JyxcclxuICAgICdlbmR0YWJsZXJvdycsXHJcbiAgICAndW5sZXNzJyxcclxuICAgICdlbmR1bmxlc3MnXHJcbl07XHJcblxyXG5jb25zdCBsaXF1aWRGaWx0ZXJzID0gW1xyXG4gICAgJ2FicycsXHJcbiAgICAnYXBwZW5kJyxcclxuICAgICdhdF9sZWFzdCcsXHJcbiAgICAnYXRfbW9zdCcsXHJcbiAgICAnY2FwaXRhbGl6ZScsXHJcbiAgICAnY2VpbCcsXHJcbiAgICAnY29tcGFjdCcsXHJcbiAgICAnZGF0ZScsXHJcbiAgICAnZGVmYXVsdCcsXHJcbiAgICAnZGl2aWRlZF9ieScsXHJcbiAgICAnZG93bmNhc2UnLFxyXG4gICAgJ2VzY2FwZScsXHJcbiAgICAnZXNjYXBlX29uY2UnLFxyXG4gICAgJ2ZpcnN0JyxcclxuICAgICdmbG9vcicsXHJcbiAgICAnam9pbicsXHJcbiAgICAnanNvbicsXHJcbiAgICAnbGFzdCcsXHJcbiAgICAnbHN0cmlwJyxcclxuICAgICdtYXAnLFxyXG4gICAgJ21pbnVzJyxcclxuICAgICdtb2R1bG8nLFxyXG4gICAgJ25ld2xpbmVfdG9fYnInLFxyXG4gICAgJ3BsdXMnLFxyXG4gICAgJ3ByZXBlbmQnLFxyXG4gICAgJ3JlbW92ZScsXHJcbiAgICAncmVtb3ZlX2ZpcnN0JyxcclxuICAgICdyZXBsYWNlJyxcclxuICAgICdyZXBsYWNlX2ZpcnN0JyxcclxuICAgICdyZXZlcnNlJyxcclxuICAgICdyb3VuZCcsXHJcbiAgICAncnN0cmlwJyxcclxuICAgICdzaXplJyxcclxuICAgICdzbGljZScsXHJcbiAgICAnc29ydCcsXHJcbiAgICAnc29ydF9uYXR1cmFsJyxcclxuICAgICdzcGxpdCcsXHJcbiAgICAnc3RyaXAnLFxyXG4gICAgJ3N0cmlwX2h0bWwnLFxyXG4gICAgJ3N0cmlwX25ld2xpbmVzJyxcclxuICAgICd0aW1lcycsXHJcbiAgICAndHJ1bmNhdGUnLFxyXG4gICAgJ3RydW5jYXRld29yZHMnLFxyXG4gICAgJ3VuaXEnLFxyXG4gICAgJ3VwY2FzZScsXHJcbiAgICAndXJsX2RlY29kZScsXHJcbiAgICAndXJsX2VuY29kZScsXHJcbiAgICAnd2hlcmUnXHJcbl1cclxuXHJcbmludGVyZmFjZSBJTGlxdWlkQ29udGV4dEluZm8ge1xyXG4gICAgc2hvd0ZpbHRlcnM6IGJvb2xlYW4sXHJcbiAgICBzaG93VGFnczogYm9vbGVhbixcclxuICAgIGluY2x1ZGVFbmRUYWdzOiBib29sZWFuLFxyXG4gICAgaW5UYWc6IGJvb2xlYW4sXHJcbiAgICBpbk9iamVjdDogYm9vbGVhblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaXF1aWRDb250ZXh0SW5mbyhtb2RlbDogbW9uYWNvLmVkaXRvci5JVGV4dE1vZGVsLCBwb3NpdGlvbjogbW9uYWNvLlBvc2l0aW9uLCB0cmlnZ2VyQ2hhcmFjdGVyOiBzdHJpbmcpOiBJTGlxdWlkQ29udGV4dEluZm8ge1xyXG4gICAgdmFyIGluVGFnOiBib29sZWFuO1xyXG4gICAgdmFyIGluT2JqZWN0OiBib29sZWFuO1xyXG4gICAgdmFyIHNob3dUYWdzOiBib29sZWFuO1xyXG4gICAgdmFyIHNob3dGaWx0ZXJzOiBib29sZWFuO1xyXG5cclxuICAgIHZhciBmaW5kU3RhcnQgPSBtb2RlbC5maW5kUHJldmlvdXNNYXRjaCgnXFxcXHsoJXxcXFxceyknLCBwb3NpdGlvbiwgdHJ1ZSwgZmFsc2UsIG51bGwsIHRydWUpO1xyXG4gICAgaWYgKGZpbmRTdGFydCAmJiBmaW5kU3RhcnQubWF0Y2hlcyAmJiAhcG9zaXRpb24uaXNCZWZvcmUoZmluZFN0YXJ0LnJhbmdlLmdldEVuZFBvc2l0aW9uKCkpKSB7XHJcbiAgICAgICAgaWYgKGZpbmRTdGFydC5tYXRjaGVzWzFdID09ICclJykge1xyXG4gICAgICAgICAgICBpblRhZyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaW5kU3RhcnQubWF0Y2hlc1sxXSA9PSAneycpIHtcclxuICAgICAgICAgICAgaW5PYmplY3QgPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VhcmNoUGF0dGVybiA9IGluVGFnID8gJyV9JyA6ICd9fSc7XHJcbiAgICAgICAgdmFyIGZpbmRFbmQgPSBtb2RlbC5maW5kTmV4dE1hdGNoKHNlYXJjaFBhdHRlcm4sIHBvc2l0aW9uLCBmYWxzZSwgZmFsc2UsIG51bGwsIHRydWUpO1xyXG4gICAgICAgIHZhciBjdXJyZW50UmFuZ2UgPSBmaW5kU3RhcnQucmFuZ2UucGx1c1JhbmdlKGZpbmRFbmQucmFuZ2UpO1xyXG4gICAgICAgIGlmIChjdXJyZW50UmFuZ2UuY29udGFpbnNQb3NpdGlvbihwb3NpdGlvbikpIHtcclxuICAgICAgICAgICAgaWYgKGluVGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmluZFRhZ05hbWUgPSBtb2RlbC5maW5kTmV4dE1hdGNoKCdcXFxceyVcXFxccyooW2EtekEtWi1fXSspJywgZmluZFN0YXJ0LnJhbmdlLmdldFN0YXJ0UG9zaXRpb24oKSwgdHJ1ZSwgZmFsc2UsIG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmRUYWdOYW1lICYmIGN1cnJlbnRSYW5nZS5jb250YWluc1JhbmdlKGZpbmRUYWdOYW1lLnJhbmdlKSAmJiBmaW5kVGFnTmFtZS5tYXRjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmluZFRhZ05hbWUubWF0Y2hlc1sxXSA9PSAnYXNzaWduJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RmlsdGVycyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1RhZ3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dUYWdzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dGaWx0ZXJzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dGaWx0ZXJzLFxyXG4gICAgICAgIHNob3dUYWdzLFxyXG4gICAgICAgIGluVGFnLFxyXG4gICAgICAgIGluT2JqZWN0XHJcbiAgICB9IGFzIElMaXF1aWRDb250ZXh0SW5mbztcclxufVxyXG5cclxuY29uc3QgY29tcGxldGlvbkl0ZW1Qcm92aWRlcjogbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbVByb3ZpZGVyID0ge1xyXG4gICAgdHJpZ2dlckNoYXJhY3RlcnM6IFsnICddLFxyXG4gICAgcHJvdmlkZUNvbXBsZXRpb25JdGVtczogKG1vZGVsOiBtb25hY28uZWRpdG9yLklUZXh0TW9kZWwsIHBvc2l0aW9uOiBtb25hY28uUG9zaXRpb24sIGNvbnRleHQ6IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkNvbnRleHQsIHRva2VuOiBtb25hY28uQ2FuY2VsbGF0aW9uVG9rZW4pID0+IHtcclxuICAgICAgICB2YXIgaXRlbXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0LnRyaWdnZXJDaGFyYWN0ZXIgPT0gJyAnKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydFRyaWdnZXIgPSBtb2RlbC5nZXRWYWx1ZUluUmFuZ2UobmV3IG1vbmFjby5SYW5nZShwb3NpdGlvbi5saW5lTnVtYmVyLCBwb3NpdGlvbi5jb2x1bW4gLSAzLCBwb3NpdGlvbi5saW5lTnVtYmVyLCBwb3NpdGlvbi5jb2x1bW4gLSAxKSk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydFRyaWdnZXIgIT0gJ3slJyAmJiAhc3RhcnRUcmlnZ2VyLmVuZHNXaXRoKCd8JykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbGlxdWlkQ29udGV4dDogSUxpcXVpZENvbnRleHRJbmZvID0gZ2V0TGlxdWlkQ29udGV4dEluZm8obW9kZWwsIHBvc2l0aW9uLCBjb250ZXh0LnRyaWdnZXJDaGFyYWN0ZXIpO1xyXG4gICAgICAgIGlmIChsaXF1aWRDb250ZXh0LnNob3dGaWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zID0gbGlxdWlkRmlsdGVycztcclxuICAgICAgICB9IGVsc2UgaWYgKGxpcXVpZENvbnRleHQuc2hvd1RhZ3MpIHtcclxuICAgICAgICAgICAgaXRlbXMgPSBsaXF1aWRUYWdzLmZpbHRlcigodmFsdWU6IHN0cmluZykgPT4geyByZXR1cm4gIXZhbHVlLnN0YXJ0c1dpdGgoJ2VuZCcpIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBpdGVtcy5tYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGtpbmQ6IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLktleXdvcmQsXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRUZXh0OiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGluc2VydFRleHRSdWxlczogbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUluc2VydFRleHRSdWxlLktlZXBXaGl0ZXNwYWNlXHJcbiAgICAgICAgICAgIH0gYXMgbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9ucyB9IGFzIG1vbmFjby5sYW5ndWFnZXMuUHJvdmlkZXJSZXN1bHQ8bW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uTGlzdD47XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBDb25maWd1cmVMaXF1aWRJbnRlbGxpc2Vuc2UobW9uYWNvOiBhbnksIHN1Z2dlc3RIdG1sOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgaWYgKHN1Z2dlc3RIdG1sKSB7XHJcbiAgICAgICAgdmFyIG1vZGVDb25maWd1cmF0aW9uOiBtb25hY28ubGFuZ3VhZ2VzLmh0bWwuTW9kZUNvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRpb25JdGVtczogdHJ1ZSxcclxuICAgICAgICAgICAgY29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICBmb2xkaW5nUmFuZ2VzOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb25SYW5nZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGRpYWdub3N0aWNzOiBmYWxzZSxcclxuICAgICAgICAgICAgZG9jdW1lbnRGb3JtYXR0aW5nRWRpdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGRvY3VtZW50UmFuZ2VGb3JtYXR0aW5nRWRpdHM6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBvcHRpb25zOiBtb25hY28ubGFuZ3VhZ2VzLmh0bWwuT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgZm9ybWF0OiBtb25hY28ubGFuZ3VhZ2VzLmh0bWwuaHRtbERlZmF1bHRzLm9wdGlvbnMuZm9ybWF0LFxyXG4gICAgICAgICAgICBzdWdnZXN0OiB7IGh0bWw1OiB0cnVlIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbW9uYWNvLmxhbmd1YWdlcy5odG1sLnJlZ2lzdGVySFRNTExhbmd1YWdlU2VydmljZSgnbGlxdWlkJywgb3B0aW9ucywgbW9kZUNvbmZpZ3VyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyKCdsaXF1aWQnLCBjb21wbGV0aW9uSXRlbVByb3ZpZGVyKTtcclxufVxyXG4iLCJ2YXIgbGlxdWlkVGFncyA9IFtcbiAgICAnaWYnLFxuICAgICdlbHNlJyxcbiAgICAnZWxzZWlmJyxcbiAgICAnZW5kaWYnLFxuICAgICdyZW5kZXInLFxuICAgICdhc3NpZ24nLFxuICAgICdjYXB0dXJlJyxcbiAgICAnZW5kY2FwdHVyZScsXG4gICAgJ2Nhc2UnLFxuICAgICdlbmRjYXNlJyxcbiAgICAnY29tbWVudCcsXG4gICAgJ2VuZGNvbW1lbnQnLFxuICAgICdjeWNsZScsXG4gICAgJ2RlY3JlbWVudCcsXG4gICAgJ2ZvcicsXG4gICAgJ2VuZGZvcicsXG4gICAgJ2luY2x1ZGUnLFxuICAgICdpbmNyZW1lbnQnLFxuICAgICdsYXlvdXQnLFxuICAgICdyYXcnLFxuICAgICdlbmRyYXcnLFxuICAgICdyZW5kZXInLFxuICAgICd0YWJsZXJvdycsXG4gICAgJ2VuZHRhYmxlcm93JyxcbiAgICAndW5sZXNzJyxcbiAgICAnZW5kdW5sZXNzJ1xuXTtcbnZhciBsaXF1aWRGaWx0ZXJzID0gW1xuICAgICdhYnMnLFxuICAgICdhcHBlbmQnLFxuICAgICdhdF9sZWFzdCcsXG4gICAgJ2F0X21vc3QnLFxuICAgICdjYXBpdGFsaXplJyxcbiAgICAnY2VpbCcsXG4gICAgJ2NvbXBhY3QnLFxuICAgICdkYXRlJyxcbiAgICAnZGVmYXVsdCcsXG4gICAgJ2RpdmlkZWRfYnknLFxuICAgICdkb3duY2FzZScsXG4gICAgJ2VzY2FwZScsXG4gICAgJ2VzY2FwZV9vbmNlJyxcbiAgICAnZmlyc3QnLFxuICAgICdmbG9vcicsXG4gICAgJ2pvaW4nLFxuICAgICdqc29uJyxcbiAgICAnbGFzdCcsXG4gICAgJ2xzdHJpcCcsXG4gICAgJ21hcCcsXG4gICAgJ21pbnVzJyxcbiAgICAnbW9kdWxvJyxcbiAgICAnbmV3bGluZV90b19icicsXG4gICAgJ3BsdXMnLFxuICAgICdwcmVwZW5kJyxcbiAgICAncmVtb3ZlJyxcbiAgICAncmVtb3ZlX2ZpcnN0JyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlcGxhY2VfZmlyc3QnLFxuICAgICdyZXZlcnNlJyxcbiAgICAncm91bmQnLFxuICAgICdyc3RyaXAnLFxuICAgICdzaXplJyxcbiAgICAnc2xpY2UnLFxuICAgICdzb3J0JyxcbiAgICAnc29ydF9uYXR1cmFsJyxcbiAgICAnc3BsaXQnLFxuICAgICdzdHJpcCcsXG4gICAgJ3N0cmlwX2h0bWwnLFxuICAgICdzdHJpcF9uZXdsaW5lcycsXG4gICAgJ3RpbWVzJyxcbiAgICAndHJ1bmNhdGUnLFxuICAgICd0cnVuY2F0ZXdvcmRzJyxcbiAgICAndW5pcScsXG4gICAgJ3VwY2FzZScsXG4gICAgJ3VybF9kZWNvZGUnLFxuICAgICd1cmxfZW5jb2RlJyxcbiAgICAnd2hlcmUnXG5dO1xuZnVuY3Rpb24gZ2V0TGlxdWlkQ29udGV4dEluZm8obW9kZWwsIHBvc2l0aW9uLCB0cmlnZ2VyQ2hhcmFjdGVyKSB7XG4gICAgdmFyIGluVGFnO1xuICAgIHZhciBpbk9iamVjdDtcbiAgICB2YXIgc2hvd1RhZ3M7XG4gICAgdmFyIHNob3dGaWx0ZXJzO1xuICAgIHZhciBmaW5kU3RhcnQgPSBtb2RlbC5maW5kUHJldmlvdXNNYXRjaCgnXFxcXHsoJXxcXFxceyknLCBwb3NpdGlvbiwgdHJ1ZSwgZmFsc2UsIG51bGwsIHRydWUpO1xuICAgIGlmIChmaW5kU3RhcnQgJiYgZmluZFN0YXJ0Lm1hdGNoZXMgJiYgIXBvc2l0aW9uLmlzQmVmb3JlKGZpbmRTdGFydC5yYW5nZS5nZXRFbmRQb3NpdGlvbigpKSkge1xuICAgICAgICBpZiAoZmluZFN0YXJ0Lm1hdGNoZXNbMV0gPT0gJyUnKSB7XG4gICAgICAgICAgICBpblRhZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmluZFN0YXJ0Lm1hdGNoZXNbMV0gPT0gJ3snKSB7XG4gICAgICAgICAgICBpbk9iamVjdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlYXJjaFBhdHRlcm4gPSBpblRhZyA/ICclfScgOiAnfX0nO1xuICAgICAgICB2YXIgZmluZEVuZCA9IG1vZGVsLmZpbmROZXh0TWF0Y2goc2VhcmNoUGF0dGVybiwgcG9zaXRpb24sIGZhbHNlLCBmYWxzZSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIHZhciBjdXJyZW50UmFuZ2UgPSBmaW5kU3RhcnQucmFuZ2UucGx1c1JhbmdlKGZpbmRFbmQucmFuZ2UpO1xuICAgICAgICBpZiAoY3VycmVudFJhbmdlLmNvbnRhaW5zUG9zaXRpb24ocG9zaXRpb24pKSB7XG4gICAgICAgICAgICBpZiAoaW5UYWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmluZFRhZ05hbWUgPSBtb2RlbC5maW5kTmV4dE1hdGNoKCdcXFxceyVcXFxccyooW2EtekEtWi1fXSspJywgZmluZFN0YXJ0LnJhbmdlLmdldFN0YXJ0UG9zaXRpb24oKSwgdHJ1ZSwgZmFsc2UsIG51bGwsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChmaW5kVGFnTmFtZSAmJiBjdXJyZW50UmFuZ2UuY29udGFpbnNSYW5nZShmaW5kVGFnTmFtZS5yYW5nZSkgJiYgZmluZFRhZ05hbWUubWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaW5kVGFnTmFtZS5tYXRjaGVzWzFdID09ICdhc3NpZ24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RmlsdGVycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93VGFncyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93VGFncyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvd0ZpbHRlcnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHNob3dGaWx0ZXJzOiBzaG93RmlsdGVycyxcbiAgICAgICAgc2hvd1RhZ3M6IHNob3dUYWdzLFxuICAgICAgICBpblRhZzogaW5UYWcsXG4gICAgICAgIGluT2JqZWN0OiBpbk9iamVjdFxuICAgIH07XG59XG52YXIgY29tcGxldGlvbkl0ZW1Qcm92aWRlciA9IHtcbiAgICB0cmlnZ2VyQ2hhcmFjdGVyczogWycgJ10sXG4gICAgcHJvdmlkZUNvbXBsZXRpb25JdGVtczogZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgY29udGV4dCwgdG9rZW4pIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIGlmIChjb250ZXh0LnRyaWdnZXJDaGFyYWN0ZXIgPT0gJyAnKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRUcmlnZ2VyID0gbW9kZWwuZ2V0VmFsdWVJblJhbmdlKG5ldyBtb25hY28uUmFuZ2UocG9zaXRpb24ubGluZU51bWJlciwgcG9zaXRpb24uY29sdW1uIC0gMywgcG9zaXRpb24ubGluZU51bWJlciwgcG9zaXRpb24uY29sdW1uIC0gMSkpO1xuICAgICAgICAgICAgaWYgKHN0YXJ0VHJpZ2dlciAhPSAneyUnICYmICFzdGFydFRyaWdnZXIuZW5kc1dpdGgoJ3wnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBsaXF1aWRDb250ZXh0ID0gZ2V0TGlxdWlkQ29udGV4dEluZm8obW9kZWwsIHBvc2l0aW9uLCBjb250ZXh0LnRyaWdnZXJDaGFyYWN0ZXIpO1xuICAgICAgICBpZiAobGlxdWlkQ29udGV4dC5zaG93RmlsdGVycykge1xuICAgICAgICAgICAgaXRlbXMgPSBsaXF1aWRGaWx0ZXJzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxpcXVpZENvbnRleHQuc2hvd1RhZ3MpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gbGlxdWlkVGFncy5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiAhdmFsdWUuc3RhcnRzV2l0aCgnZW5kJyk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdWdnZXN0aW9ucyA9IGl0ZW1zLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGtpbmQ6IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLktleXdvcmQsXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGV4dDogdmFsdWUsXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGV4dFJ1bGVzOiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtSW5zZXJ0VGV4dFJ1bGUuS2VlcFdoaXRlc3BhY2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyBzdWdnZXN0aW9uczogc3VnZ2VzdGlvbnMgfTtcbiAgICB9XG59O1xuZnVuY3Rpb24gQ29uZmlndXJlTGlxdWlkSW50ZWxsaXNlbnNlKG1vbmFjbywgc3VnZ2VzdEh0bWwpIHtcbiAgICBpZiAoc3VnZ2VzdEh0bWwgPT09IHZvaWQgMCkgeyBzdWdnZXN0SHRtbCA9IHRydWU7IH1cbiAgICBpZiAoc3VnZ2VzdEh0bWwpIHtcbiAgICAgICAgdmFyIG1vZGVDb25maWd1cmF0aW9uID0ge1xuICAgICAgICAgICAgY29tcGxldGlvbkl0ZW1zOiB0cnVlLFxuICAgICAgICAgICAgY29sb3JzOiB0cnVlLFxuICAgICAgICAgICAgZm9sZGluZ1JhbmdlczogdHJ1ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvblJhbmdlczogdHJ1ZSxcbiAgICAgICAgICAgIGRpYWdub3N0aWNzOiBmYWxzZSxcbiAgICAgICAgICAgIGRvY3VtZW50Rm9ybWF0dGluZ0VkaXRzOiB0cnVlLFxuICAgICAgICAgICAgZG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0czogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZvcm1hdDogbW9uYWNvLmxhbmd1YWdlcy5odG1sLmh0bWxEZWZhdWx0cy5vcHRpb25zLmZvcm1hdCxcbiAgICAgICAgICAgIHN1Z2dlc3Q6IHsgaHRtbDU6IHRydWUgfVxuICAgICAgICB9O1xuICAgICAgICBtb25hY28ubGFuZ3VhZ2VzLmh0bWwucmVnaXN0ZXJIVE1MTGFuZ3VhZ2VTZXJ2aWNlKCdsaXF1aWQnLCBvcHRpb25zLCBtb2RlQ29uZmlndXJhdGlvbik7XG4gICAgfVxuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyKCdsaXF1aWQnLCBjb21wbGV0aW9uSXRlbVByb3ZpZGVyKTtcbn1cbiJdfQ==